import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Offering } from "../component/Offering.js";

const Offerings = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <ul>
        {/* {store.offerings.map((result) => { */}
        return (
        <li>
          <Offering
            // category={result.category}
            category="cooking"
            // key={result.id}
            // title={result.title}
            title="can opener"
            // image={result.image}
            image="https://scontent.fbcn7-3.fna.fbcdn.net/v/t39.30808-6/337162258_1231158724462319_2591743272776242815_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=UpSVI-ivXTIAX9fsY-x&_nc_ht=scontent.fbcn7-3.fna&oh=00_AfDntB2v4WphWsWnYi9ONTto8fmVb2F75Q-9HL3P8LYewQ&oe=642BBCC3"
            // description={result.description}
          />
        </li>
        );
        {/* })} */}
      </ul>
    </div>
  );
};

export default Offerings;
