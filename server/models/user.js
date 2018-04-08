module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        mobile: DataTypes.STRING,
        userName: DataTypes.STRING,      
        passWord: DataTypes.STRING,
        wxCookie: DataTypes.STRING        
    },
        {
            classMethods: {
                associate: function (models) {
                    User.hasMany(models.Post, { foreignKey: 'userId' });
                }
            }
        }
    );
    return User;
}