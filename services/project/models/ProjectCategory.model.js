const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

autoIncrement.initialize(mongoose);

const Schema = mongoose.Schema(
  {
    projectCategoryName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "ProjectCategory",
    versionKey: false,
    timestamps: true,
  }
);

Schema.index({ projectCategoryName: 1 });

/*
| ==========================================================
| Plugins
| ==========================================================
*/

Schema.plugin(autoIncrement.plugin, {
  model: `${Schema.options.collection}-id`,
  field: "id",
  startAt: 1,
  incrementBy: 1,
});

module.exports = mongoose.model(Schema.options.collection, Schema);
