const User = require('./User');
const BlogEntry = require('./BlogEntry');
const Comment = require('./Comment')


BlogEntry.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogEntry.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, BlogEntry, Comment };