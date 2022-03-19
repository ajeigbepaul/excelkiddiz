import React, { useState } from "react";
import Header from "./Header";
import Regcont from "./Regcont";
import "./Register.css";
function Register() {
  const [info, setInfo] = useState({
    surname: "",
    firstname: "",
    email: "",
    phonenos: "",
    username: "",
    password: "",
    mainclass: [],
    subclass: [],
    subjTeacherClass: [],
    roles: [],
    headOfDept: "",
    class1: "",
    class2: "",
    class3: "",
    class4: "",
    class5: "",
    class6: "",
  });
  const [mainclass] = useState([
    "Pri 1",
    "Pri 2",
    "Pri 3",
    "Pri 4",
    "Pri 5",
    "Pri 6",
  ]);
  const [subclasses] = useState(["A", "B", "C", "D"]);
  const [role] = useState([
    "HOD",
    "Management",
    "Subject Teacher",
    "Class Teacher",
  ]);
  const [hods] = useState(["Maths", "Languages", "Art", "Science"]);

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? target.name === "roles"
          ? updateRoles(
              target.checked,
              target.value,
              info.roles,
              info.subjTeacherClass
            )
          : target.checked
        : target.value;
    const name = target.name;
    setInfo({ ...info, [name]: value });
  };
  const handleSubjectClass = (e) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? target.name === "subjTeacherClass"
          ? updateRoles(target.checked, target.value, info.subjTeacherClass)
          : target.checked
        : target.value;
    const name = target.name;
    setInfo({ ...info, [name]: value });
  };
  const updateRoles = (checked, value, arr) => {
    if (checked) arr.push(value);
    else {
      let index = arr.findIndex((ele) => ele === value);
      if (index > 0) arr.splice(index, 1);
    }
    return arr;
  };
  return (
    <div className="register">
      <Header />
      <div className="register__container">
        <h2>Register here</h2>
        <form className="register__form">
          <div className="register__formcontrol">
            <input
              type="text"
              placeholder="Surname"
              name="surname"
              value={info.surname}
              onChange={handleChange}
            />
          </div>
          <div className="register__formcontrol">
            <input
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={info.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="register__formcontrol">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </div>
          <div className="register__formcontrol">
            <input
              type="tel"
              placeholder="Phone Nos"
              name="phonenos"
              value={info.phonenos}
              onChange={handleChange}
            />
          </div>
          <div className="register__formcontrol">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={info.username}
              onChange={handleChange}
            />
          </div>
          <div className="register__formcontrol">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={info.password}
              onChange={handleChange}
            />
          </div>

          <div className="register__formcontrol roles">
            <h2 className="register__title">Roles</h2>
            <div className="register__checkbox">
              {role.map((rl) => (
                <div className="register__role" key={rl}>
                  <input
                    type="checkbox"
                    checked={info.roles.findIndex((role) => role === rl) >= 0}
                    name="roles"
                    onChange={handleChange}
                    value={rl}
                  />
                  <span>{rl}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="register__formcontrol chooseclass">
            <h2>Class Teacher Column</h2>
            <div className="register__clcont">
              <div className="register__classteacher">
                {mainclass.map((cl) => (
                  <div className="register__cl">
                    <div className="register__t">{cl}</div>
                    <input
                      type="radio"
                      checked={info.mainclass === cl}
                      name="mainclass"
                      value={cl}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
              <div className="register__sel">
                <Regcont
                  datas={subclasses}
                  name="subclass"
                  value={info.subclass}
                  handleChange={handleChange}
                />
                <Regcont datas={subclasses} />
                <Regcont datas={subclasses} />
                <Regcont datas={subclasses} />
                <Regcont datas={subclasses} />
                <Regcont datas={subclasses} />
              </div>
            </div>
          </div>
          <div className="register__formcontrol choosesubjects">
            <h2>Subject Teacher Column</h2>

            <div className="register__clcont">
              <div className="register__classteacher">
                {mainclass.map((subjT) => (
                  <div className="register__cl">
                    <div className="register__t">{subjT}</div>
                    <input
                      type="checkbox"
                      value={subjT}
                      name="subjTeacherClass"
                      checked={
                        info.subjTeacherClass.findIndex(
                          (classt) => classt === subjT
                        ) >= 0
                      }
                      onChange={handleSubjectClass}
                    />
                  </div>
                ))}
              </div>

              <div className="subjects__selected">
                <textarea
                  value={info.class1}
                  name="class1"
                  onChange={handleChange}
                />
                <textarea
                  value={info.class2}
                  name="class2"
                  onChange={handleChange}
                />
                <textarea
                  value={info.class3}
                  name="class3"
                  onChange={handleChange}
                />
                <textarea
                  value={info.class4}
                  name="class4"
                  onChange={handleChange}
                />
                <textarea
                  value={info.class5}
                  name="class5"
                  onChange={handleChange}
                />
                <textarea
                  value={info.class6}
                  name="class6"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="register__formcontrol hod">
            <h2 className="register__title">H.O.D column</h2>
            <div className="register__checkbox">
              {hods.map((hd) => (
                <div className="register__role" key={hd}>
                  <input
                    type="radio"
                    checked={info.headOfDept === hd}
                    name="headOfDept"
                    onChange={handleChange}
                    value={hd}
                  />
                  <span>{hd}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="register__formcontrol btn">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
