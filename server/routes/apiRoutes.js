import express from 'express';
import AccountCtrl from './../controllers/accountController';
import GroupCtrl from './../controllers/groupController';
import MessageCtrl from './../controllers/messageController';
import UserCtrl from './../controllers/userController';
import Validations from '../controllers/middlewares/middleware';
// const express = require('express');
// const Account = require('../data/models').Account;
// const Group = require('../data/models').Group;
const router = express.Router();

router.get('/api/user', AccountCtrl.getAll);
router.post('/api/user/signup',Validations.validateUserInput, AccountCtrl.signup);
router.post('/api/user/signin', AccountCtrl.signin);
router.post('/api/group', GroupCtrl.createGroup);
router.get('/api/group', UserCtrl.getGroup);
router.post('/api/group/:groupId/message', MessageCtrl.sendMessage);
router.get('/api/group/:groupId/messages', MessageCtrl.getMessages);
router.post('/api/group/:groupId/user', UserCtrl.addUser);
// GroupCtrl.createGroup);

export default router;
