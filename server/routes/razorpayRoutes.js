import express from 'express';
import Razorpay from 'razorpay';
import request from 'request';
const router = express.Router();

const keys = {
    razorIdKey: "rzp_test_ogACXm0sRFn9Qv",
    razorpaySecret: "dnA4KLKjapPf8B7p4YczBbuk",
}

const razorInstance = new Razorpay({
    key_id: keys.razorIdKey,
    key_secret: keys.razorpaySecret
});

router.get('/order', (req, res) => {
    try {
        const options = {
            amount: 10 * 100,
            currency: "INR",
            receipt: "receipt#1",
            payment_capture: 0, // 1
        };
        razorInstance.orders.create(options, async (err, order) => {
            if (err) return res.status(500).json({ message: "Payment Does Not Processed!" });
            res.status(200).json(order);
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

router.post("/capture/:paymentId", (req, res) => {
    try {
        return request(
            {
                method: "POST",
                url: `https://${keys.razorIdkey}:${keys.razorIdSecret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: 10 * 100,
                    currency: "INR"
                },
            },
            async (err, response, body) => {
                if (err) {
                    return res.status(500).json({
                        message: "Something error!s"
                    })
                }
                return res.status(200).json(body)
            }
        )
    }
    catch (err) {
        return res.status(404).json({
            message: err.message
        })
    }
})

export default router;