const express = require('express');
const db = require('../database');

exports.create = async (req, res) => {
    try {
        let result = await db.createTable();
        return res.json(wrap(result))
    } catch (err) {
        console.log(err);
    }
}

insert = async (req, res) => {
    try {
        let result = await db.insert(ip, city, country, lat, long);
        return res.json(wrap(result))
    } catch (err) {
        res.status(500).json({ errors: err.detail })
    }
}

exports.all = async (req, res) => {
    try {
        let result = await db.returnAll();
        return res.json(wrap(result))
    } catch (err) {
        res.status(500).json({ errors: err.detail })
    }
}
