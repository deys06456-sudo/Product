const Student = require("../models/student.model");

class StudentController {
    // CREATE STUDENT
    async CreateStudent(req, res) {
        //console.log(req.body);
        //console.log(req.file);
        try {
            const { name, email, phone, address } = req.body;
            if (!name || !email || !phone || !address) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            }
            const studentData = new Student({
                name,
                email,
                phone,
                address,
            });

            if (req.file) {
                studentData.image = req.file.path;
            }

            // Save employee into MongoDB
            const data = await studentData.save();

            // Send success response
            return res.status(201).json({
                success: true,
                message: "Student created successfully",
                data: data,
            });


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }


    //GET ALL STUDENT 
    async getStudent(req, res) {
        try {
            const getstudent = await Student.find();
            return res.status(200).json({
                success: true,
                message: "Student fetched successfully",
                total: getstudent.length,
                data: getstudent,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }


    // GET SINGLE STUDENT
    async getsingleStudent(req, res) {
        try {
            const id = req.params.id;

            const getSingleData = await Student.findById(id);

            if (!getSingleData) {
                return res.status(404).json({
                    success: false,
                    message: "Data not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Get single data",
                data: getSingleData,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }


    //UPDATE STUDENT 
    async updateStudent(req, res) {
        try {
            const id = req.params.id;
            const { name, email, phone, address } = req.body;
            const updatestudent = await Student.findByIdAndUpdate(
                id,
                { name, email, phone, address },
                { new: true }
            );

            if (!updatestudent) {
                return res.status(404).json({
                    success: false,
                    message: "Data not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Data updated successfully",
                data: updatestudent,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }

    // DELETE STUDENT 
    async deleteStudent(req, res) {
        try {
            const id = req.params.id;
            const deleteStudent = await Student.findByIdAndDelete(id);
            if (!deleteStudent) {
                return res.status(404).json({
                    success: false,
                    message: "Data not found",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Data deleted successfully",
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}

module.exports = StudentController;







