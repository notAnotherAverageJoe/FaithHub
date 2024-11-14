const Sermon = require("../models/Sermons");

class SermonController {
  static async createSermon(req, res) {
    try {
      const { title, preacher, description, media_url, date } = req.body;
      const newSermon = await Sermon.create({
        title,
        preacher,
        description,
        media_url,
        date,
      });
      res.status(201).json(newSermon);
    } catch (error) {
      res.status(500).json({ message: "Error creating sermon" });
    }
  }
  static async findAllSermons(req, res) {
    try {
      const sermons = await Sermon.findAll();
      res.status(201).json(sermons);
    } catch (error) {
      res.status(500).json({ message: "Failed to collect all sermons" });
    }
  }
}

module.exports.SermonController;
