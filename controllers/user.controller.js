const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

  const { q, name = 'no name' } = req.query;

  res.json({
    ok: true,
    msg: 'get API - controller',
    q,
    name
  });
}

const postUsers = (req, res = response) => {
  const { name, age } = req.body;

  res.json({
    ok: true,
    msg: 'post API - controller',
    name,
    age
  });
}

const putUsers = (req, res = response) => {
  const { id } = req.params;

  res.json({
    ok: true,
    msg: 'put API - controller',
    id
  });
}

const deleteUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'delete API - controller'
  });
}

const patchUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'patch API - controller'
  });
}

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
  patchUsers
}