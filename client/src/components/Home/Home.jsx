import { React, useState, useEffect } from "react";
import { getAllCars } from "../../actions/cars";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import "./style.css";

function Home() {
  const { cars, low, high } = useSelector((state) => state.bookcar);
  const dispatch = useDispatch();
  const [currentLowRate, setCurrentLowRate] = useState();
  const [currentHighRate, setCurrentHighRate] = useState();
  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    setCurrentLowRate(low);
    setCurrentHighRate(high);
  }, [low, high]);

  const handleFilter = () => {
    dispatch({
      type: "FILTER",
      payload: { low: currentLowRate, high: currentHighRate },
    });
  };

  return (
    <>
      <div className="landing-page">
        <div className="wrapper-reveal">
          <div className="txt-static">Hire the</div>
          <div className="txt-dynamic">
            <li>
              <span>best car at the best price</span>
            </li>
          </div>
        </div>
      </div>
      <Row className="home-row m-2" justify="center" gutter={16}>
        <Col xs={24} lg={4}>
          <Row className="filter">
            <Col xs={24}>
              <div>
                <div className="heading-col d-flex justify-content-between">
                  <h4>Filter</h4>
                  <button>Clear all filter</button>
                </div>
                <div>
                  <h4>Price range</h4>
                  <p>
                    Minimum
                    <span>-Rs.{currentLowRate}</span>
                  </p>

                  <input
                    type="range"
                    min={low}
                    max={high / 2}
                    onChange={(e) => setCurrentLowRate(e.target.value)}
                  />
                  <p>
                    Maximum
                    <span>-Rs.{currentHighRate}</span>
                  </p>

                  <input
                    type="range"
                    min={currentLowRate}
                    max={high}
                    onChange={(e) => setCurrentHighRate(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success btn-xs"
                  onClick={handleFilter}
                >
                  Apply
                </button>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={20}>
          <Row gutter={16}>
            {cars.map((item) => (
              <Col
                className="home-car m-5  d-flex flex-column align-items-center flex-wrap"
                xs={20}
                lg={6}
              >
                {/* <div className="home-car mb-5 d-flex flex-column align-items-center flex-wrap"> */}
                <img src={item.image} />
                <div className="content  d-flex justify-content-around">
                  <div className="mb-2 d-flex flex-column align-items-between flex-wrap">
                    <p>{item.car_name}</p>
                    <p>{item.rate}</p>
                    <p>
                      {item.status == 1
                        ? "available"
                        : item.status == 2
                        ? "booked"
                        : "not available"}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-center m-2">
                    <button className="book-now">Book Now</button>
                  </div>
                </div>
                {/* </div> */}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
