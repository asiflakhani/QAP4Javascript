// Define the MotelCustomer object
const customer = {
    // Customer attributes
    fullName: "",
    dateofBirth: "",
    gender: "",
    roomPreference: [],
    payMethod: "",
    mailingAddress: {
      street: "",
      city: "",
      province: "",
      postalCode: "",
      country: ""
    },
    phoneNumber: "",
    checkInDate: {},
    checkOutDate: {},
  
    // Methods to determine age and duration of stay
    calculateAge: function() {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    },
    
    durationOfStay: function() {
      const checkIn = new Date(this.checkInDate.year, this.checkInDate.month - 1, this.checkInDate.day);
      const checkOut = new Date(this.checkOutDate.year, this.checkOutDate.month - 1, this.checkOutDate.day);
      const duration = (checkOut - checkIn) / (1000 * 60 * 60 * 24); // Convert milliseconds to days
      return duration;
    },
  
    // Generate HTML description of the customer
    customerDescription: function() {
      const age = this.calculateAge();
      const durationOfStay = this.durationOfStay();
      return `
        <div>
          <h1>QAP 4 - Javascript</h1>
          <h3>Motel Customer Details:</h3>
          <p>Name: ${this.name}</p>
          <p>Age: ${age}</p>
          <p>Gender: ${this.gender}</p>
          <p>Room Preferences: ${this.roomPreference.concat("")}</p>
          <p>Payment Method: ${this.paymentMethod}</p>
          <p>Mailing Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.province}, ${this.mailingAddress.postalCode}, ${this.mailingAddress.country}</p>
          <p>Phone Number: ${this.phoneNumber}</p>
          <p>Check-In Date: ${this.checkInDate.month}/${this.checkInDate.day}/${this.checkInDate.year}</p>
          <p>Check-Out Date: ${this.checkOutDate.month}/${this.checkOutDate.day}/${this.checkOutDate.year}</p>
          <p>Duration of Stay: ${durationOfStay} days</p>
        </div>
      `;
    }
  };
  
  // Example:
  customer.name = "Asif Lakhani";
  customer.birthDate = "1986-05-15";
  customer.gender = "Male";
  customer.roomPreference = ["Single bed"];
  customer.payMethod = "Credit Card";
  customer.mailingAddress = {
    street: "1 Penny Lane",
    city: `St. John's`,
    province: "NL",
    postalCode: "A1A4B8",
    country: "Canada"
  };
  customer.phoneNumber = "555-123-4567";
  customer.checkInDate = { year: 2024, month: 3, day: 21 };
  customer.checkOutDate = { year: 2024, month: 3, day: 28 };
  
  // Generate and display the HTML description of the customer
  const customerDescription = customer.customerDescription();
  document.body.innerHTML = customerDescription;

  console.log(customer);