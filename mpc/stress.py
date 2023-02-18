import subprocess
import time
import sys
import os

input_count = int(sys.argv[1])
judge_count = int(sys.argv[2])

null = open(os.devnull, "w")

print("Starting server")
server = subprocess.Popen(["node", "server.js"], stdout=null, stderr=null)

print("Starting inputs")
input_processes = []
for i in range(input_count):
	p = subprocess.Popen(["node", "party.js", str(i), str(input_count), str(judge_count), str(i + 1)], stdout=null, stderr=null)
	input_processes.append(p)

print("Starting judges")
judge_processes = []
# create last judge separately to get stdout
for i in range(input_count, input_count + judge_count - 1):
	p = subprocess.Popen(["node", "party.js", str(i), str(input_count), str(judge_count), str(i + 1)], stdout=null, stderr=null)
	judge_processes.append(p)

p = subprocess.Popen(["node", "party.js", str(i), str(input_count), str(judge_count), str(input_count + judge_count)], stdout=subprocess.PIPE)
judge_processes.append(p)

start_time = None
end_time = None
while True:
	line = p.stdout.readline()
	if line:
		print(line)
		if b" ]" in line:
			end_time = time.time()
			break
		elif b"start" in line:
			print("JIFF connected")
			start_time = time.time()

s = end_time - start_time
print(f"Computation done: {s}")

for p in judge_processes:
	p.kill()

for p in input_processes:
	p.kill()

server.kill()
