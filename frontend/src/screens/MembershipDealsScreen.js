import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Membership from "../components/Membership";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, memberships: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default function MembershipDealsScreen() {
  const [{ loading, error, memberships }, dispatch] = useReducer(reducer, {
    memberships: [],
    loading: true,
    error: "",
  });

  //const [memberships, setmemberships] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/memberships");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  //<Membership membership={membership} />

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Row>
          {memberships.map((membership) => (
            <Col key={membership.slug} sm={6} md={5} lg={4} className="mb-3">
              <Membership membership={membership} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
