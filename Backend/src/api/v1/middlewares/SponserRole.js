//------------- Function to help to use to check the user role is admin
const SponserRole = async (req, res, next) => {

    try {

        if (!req.user) return res.status(409).json({ success: false, msg: 'User not found' });

        if (req.user.role != 'sponser')
            return res.status(404).json({ success: false, msg: "Normal user can't processed further" })

        next();
    } catch (error) { return res.status(500).json({ success: false, msg: error.message }); }
}

module.exports = SponserRole;