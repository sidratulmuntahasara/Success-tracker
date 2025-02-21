'use client'
// src/pages/api/github.js
import axios from 'axios';

export default async function handler(req, res) {
  const { username } = req.query;
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching GitHub data' });
  }
}