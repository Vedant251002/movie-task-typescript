// const express = require('express')
import express from 'express';
const router = express.Router();

import validateUser from '../../validate';
import controller from './loginController';


router.post("/", validateUser,controller.makeToken);


export default router;