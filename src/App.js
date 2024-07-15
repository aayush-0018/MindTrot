import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import StatusBar from "./Components/StatusBar";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <div className="fixed-top">
        <Navbar />
        <div className="mb-5 custom-margin-status">
          <StatusBar />
        </div>
      </div>
      <div className="custom-margin-upper">
        <div className="container my-2">
          <div className="row d-flex justify-content-evenly mb-5">
            <div className="col-12 col-md-5">
              <Todos
                title="Today's Appointment"
                date="7"
                day="Monday"
                time="7:00 pm"
                msg="Caregiver will start work"
              />
            </div>
            <div className="col-12 col-md-5">
              <Todos
                title="Pending Bills"
                msg="Back pain therapy"
                date="10"
                day="Sunday"
                time="6:00 am"
                amount="500Rs"
              />
            </div>
          </div>
        </div>
        <div className="App container custom-margin-top">
          <div className="row">
            {/* First Row */}
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="MEDICAL RECORDS"
                message="From Hospital"
                img="https://img.freepik.com/premium-vector/doctor-rx-clipart-cartoon-style-doctor-gives-rx-medical-prescription-with-mecidines-flat-vector_695709-849.jpg"
                discount="40"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="EQUIPMENT"
                message="For rent & sale"
                img="https://st2.depositphotos.com/1028911/7301/i/450/depositphotos_73011153-stock-photo-various-medical-equipment-isolated-on.jpg"
                discount="20"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="EQUIPMENT ORDER"
                message="For rent & sale"
                img="https://thumbs.dreamstime.com/b/delivery-man-waving-driving-van-cartoon-illustration-wearing-hat-truck-set-inside-circle-isolated-background-done-63379695.jpg"
                discount="10"
              />
            </div>
          </div>
          <div className="row">
            {/* Second Row */}
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="DOCTOR"
                message="Best Doctors On"
                show="MINDTROT"
                img="https://img.freepik.com/premium-vector/vector-doctor-medical-hospital-health-medicine-illustration-care-man-clinic-people-profes_1013341-114205.jpg"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="HOSPITAL"
                message="Top hospitals on"
                show="MINDTROT"
                img="https://i.pinimg.com/originals/34/36/56/3436568e85eed997c8b2e7af9712b01d.png"
              />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="CREDIT CARD"
                message="Flat 10% on"
                show="MINDTROT"
                img="https://t3.ftcdn.net/jpg/02/92/69/44/360_F_292694426_zk3Va3BTlC1I8L8bf72VJxc3Sd95kIiZ.jpg"
              />
            </div>
          </div>
          <div className="row">
            {/* Third Row */}
            <div className="col-12 col-md-4 mb-4">
              <Cards
                title="ANALYTICS"
                message="Analytics of your health"
                img="https://media.istockphoto.com/id/1005170776/vector/doctors-and-magnifying-glasses.jpg?s=612x612&w=0&k=20&c=zlj_Cm5IlYpSbfcGWucU4VKWuQqi_0BgQjVGX-Hx8d0="
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
