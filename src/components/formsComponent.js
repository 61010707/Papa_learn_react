import React from "react";
function FormComponent(props) {
  return (
    <main>
      <form className="form-list">
        <input
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
          placeholder="First name "
        />
        <input
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
          placeholder="Last name "
        />
        <input
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
          placeholder="age"
        />
        <label className="gender-list">
          <input
            name="gender"
            checked={props.data.gender === "male"}
            value="male"
            type="radio"
            onChange={props.handleChange}
          />
          Male
          <input
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            type="radio"
            onChange={props.handleChange}
          />
          Female
        </label>
        <label>
          {" "}
          destination location :{" "}
          <select
            name="destination"
            value={props.data.destination}
            onChange={props.handleChange}
          >
            <option value="">------ select destination ----- </option>
            <option value="location1">location1</option>
            <option value="location2">location2</option>
            <option value="location3">location3</option>
            <option value="location4">location4</option>
            <option value="location5">location5</option>
          </select>
        </label>
        <label style={{ display: "flex" }}>
          dietary Restrictions :{" "}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              <input
                name="isVegen"
                type="checkbox"
                checked={props.data.destination.isVegen}
                onChange={props.handleChange}
              />{" "}
              isVegen
            </label>
            <label>
              <input
                name="isKosher"
                type="checkbox"
                checked={props.data.destination.isKosher}
                onChange={props.handleChange}
              />{" "}
              isKosher
            </label>
            <label>
              <input
                name="isLactose"
                type="checkbox"
                checked={props.data.destination.isLactose}
                onChange={props.handleChange}
              />{" "}
              isLactose
            </label>
          </div>
        </label>

        <br />
        <br />
        <button>submit</button>
      </form>
      <hr />
      <h2>First name : {props.data.firstName}</h2>
      <h2>Last name : {props.data.lastName}</h2>
      <h2>age : {props.data.age}</h2>
      <h2>gendet : {props.data.gender}</h2>
      <h2>destination : {props.data.destination}</h2>
      <h2>
        dietary restrictions :{" "}
        {props.data.dietaryRestrictions.isKosher ? "kosher" : null}{" "}
        {props.data.dietaryRestrictions.isVegen ? "Vegen" : null}{" "}
        {props.data.dietaryRestrictions.isLactose ? "Lactose" : null}{" "}
      </h2>
    </main>
  );
}

export default FormComponent;
