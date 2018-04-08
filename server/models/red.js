module.exports = (sequelize, DataTypes) => {
    const Red = sequelize.define("Red", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        userId: DataTypes.STRING,
        price: DataTypes.STRING,
        link: DataTypes.STRING,
        bigRed: {
            type: DataTypes.ENUM('true', 'false'),
            defaultValue: 'false',
            allowNull: false
        }
    })
    return Red;
}