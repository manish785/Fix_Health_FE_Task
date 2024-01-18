import React, {useState, useEffect} from "react";

const BookingForm = ({ cityOverride }) => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        city: cityOverride || '',
        company: '',
        chiefComplaints: '',
        physioExperience: false,
        doctors: [],
    });

    useEffect(() => {
       fetchDoctors();
    }, [cityOverride]);

    const fetchDoctors = async (city) => {
        try{
            const response = await fetch(`YOUR_API_URL/doctors?city=${city}`);
            const data = await response.json();
            setFormData((prevData) => ({...prevData, doctors: data}));
        }catch(err){
            console.log('error', err);
            return;
        }
    }

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
          }));
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
    <div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm font-semibold mb-1">
            Name:
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-white text-sm font-semibold mb-1">
                Phone Number:
            </label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="age" className="block text-white text-sm font-semibold mb-1">
                Age:
            </label>
            <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="city" className="block text-white text-sm font-semibold mb-1">
                City:
            </label>
            <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="company" className="block text-white text-sm font-semibold mb-1">
                Company:
            </label>
            <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label htmlFor="chiefComplaints" className="block text-white text-sm font-semibold mb-1">
                Chief Complaints:
            </label>
            <textarea
                id="chiefComplaints"
                name="chiefComplaints"
                value={formData.chiefComplaints}
                onChange={handleInputChange}
                className="w-full  px-4 py-3 border rounded-md bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            </div>

            <div className="mb-4">
            <label className="flex items-center text-white">
                <input
                type="checkbox"
                id="physioExperience"
                name="physioExperience"
                checked={formData.physioExperience}
                onChange={handleInputChange}
                className="mr-2"
                />
                Have you had previous experience with physiotherapy?
            </label>
            </div>

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
            Book Consultation
            </button>
        </form>
    </div>
    )
}

export default BookingForm;