//----------------- Initalzing or requiring the modals here 
const NotificationModel = require("../models/NotificationModel");

const mongoose = require('mongoose')

//------------- Creating the conrtollers to control notifications
function NotificationControllers() {
    return {

        //adding a new notification , using POST '/api/v1/notification/add'
        async add(req, res) {
            try {

                let { title, message,place_id,sender,receiver } = req.body;

                sender = new mongoose.Types.ObjectId(sender);
                receiver = new mongoose.Types.ObjectId(receiver);
                place_id = new mongoose.Types.ObjectId(place_id);

                if (!title || !message ) return res.status(409).json({ success: false, msg: 'All fields are required' })

                let notification;

                if(place_id){
                    notification = await NotificationModel.create({
                        // title, message, sender: req.user._id,receiver:req.params.id,place_id
                        title, message, sender,receiver,place_id
                    });
                }else {
                    notification = await NotificationModel.create({
                        title, message, sender,receiver
                    });
                }

                // console.log('notification ',notification);

                return res.status(200).json({ success: true, msg: 'Adding a new notification successfully', notification });

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }
        },

        //Getting all unread  notification , using GET '/api/v1/notification/getAllNotifications'
        async getAllNotifications(req, res) {
            try {

                const notification = await NotificationModel.find({ receiver: req.user._id }).sort({ createdAt: -1 })

                return res.status(200).json({ success: true, msg: 'Fetch all the notifications successfully', notification });

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }
        },

        //Delete a notification , using DELETE '/api/v1/notification/delete'
        async delete(req, res) {
            try {

                const notification = await NotificationModel.deleteOne({ _id: req.params.id })

                if (!notification) return res.status(404).json({ success: false, msg: "Can't delete the message" })

                return res.status(200).json({ success: true, msg: 'Delete the  notification successfully' });

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }
        },

        //Reading all unread notifications , using GET '/api/v1/notification/read'
        async read(req, res) {
            try {

                const notification = await NotificationModel.updateMany({receiver: req.user.id, read: false }, { $set: { read: true } })

                // console.log('notification ',notification.matchedCount);

                return res.status(200).json({ success: true, msg: 'Reading the all unread notifications successfully' });

            } catch (error) { return res.status(500).json({ success: false, msg: error }); }
        },
    }
}

module.exports = NotificationControllers;