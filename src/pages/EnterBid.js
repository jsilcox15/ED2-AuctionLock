import React, { useState, useEffect} from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";
import { Container, Row, Col, Card, Image, Button, ListGroup, Modal } from 'react-bootstrap';


const RedirectHome = function() {
    window.location.replace("/")
}

export default RedirectHome;