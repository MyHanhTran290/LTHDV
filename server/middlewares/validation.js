const validateDrug = (req, res, next) => {
    const { name, dosage, card, pack, perDay } = req.body;

    // Kiểm tra tên thuốc
    if (!name || name.length <= 5) {
        return res.status(400).json({
            message: "Name has length is more than five!"
        });
    }

    // Kiểm tra định dạng liều lượng
    const dosagePattern = /^\d{2}-morning,\d{2}-afternoon,\d{2}-night$/;
    if (!dosage || !dosagePattern.test(dosage)) {
        return res.status(400).json({
            message: "Dosage follows the format: XX-morning,XX-afternoon,XX-night . In there, X is digit!"
        });
    }

    // Kiểm tra số lượng vỉ
    if (!card || parseInt(card) <= 1000) {
        return res.status(400).json({
            message: "Card is more than 1000!"
        });
    }

    // Kiểm tra số viên mỗi vỉ
    if (!pack || parseInt(pack) <= 0) {
        return res.status(400).json({
            message: "Pack is more than 0!"
        });
    }

    // Kiểm tra số viên mỗi ngày
    if (!perDay || parseInt(perDay) <= 0 || parseInt(perDay) >= 90) {
        return res.status(400).json({
            message: "PerDay is more than 0 and less than 90!"
        });
    }

    next();
};

module.exports = validateDrug;