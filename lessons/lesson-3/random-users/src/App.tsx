import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

const RANDOM_USER_EP = "https://randomuser.me/api";

const randomUsersApi = axios.create({
  baseURL: RANDOM_USER_EP,
  headers: {
    "Content-Type": "application/json",
  },
});

type ContactInfo = {
  email: string; // email
  cell: string; // cell
};

interface IRandomUserCard {
  gender: string; // gender
  fullName: string; // name.title + name.first + name.last
  address: string; // location.street.number + location.street.name , location.city + location.state + location.country
  age: number; // dob.age
  contactInfo: ContactInfo;
  picture: string; // picture.medium
  removeHandler: () => void;
}

const RandomUserCard = ({
  gender,
  fullName,
  address,
  age,
  contactInfo,
  picture,
  removeHandler,
}: IRandomUserCard) => {
  return (
    <div
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        padding: 10,
        marginBottom: 3,
        marginLeft: 3,
        borderRadius: 2,
      }}
    >
      <span>
        <div
          style={{
            display: "flex",
          }}
        >
          <img
            src={picture}
            alt="random-user-picture"
            height={50}
            width={50}
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "grey",
              borderRadius: 25,
              display: "inline",
              marginRight: 4,
            }}
          />
          <p>{`${fullName}, age: ${age}, ${gender}`}</p>
        </div>
      </span>
      <p>{address}</p>
      <span>
        <a href={`mailto:${contactInfo.email}`}>email</a>
        <br></br>
        <a href={`tel:${contactInfo.cell}`}>call</a>
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          onClick={removeHandler}
        >
          remove
        </button>
      </div>
      {/* <p>{JSON.stringify(contactInfo)}</p> */}
    </div>
  );
};

const App = () => {
  // state variables here
  const [count, setCount] = useState<number>(10);
  const [results, setResults] = useState<unknown[]>([]);

  useEffect(() => {
    getRandomUsers();
  }, []);

  // handlers
  const getRandomUsers = async () => {
    // makign requests here
    const res: AxiosResponse = await randomUsersApi.get("/", {
      params: {
        results: count,
      },
    });

    // picking off the results key from the response
    const randomUsersResults = res.data?.results ?? [];

    // adding on the new results ( random users array ) to the previosu results
    setResults([...results, ...randomUsersResults]);
    setCount(10);
  };

  return (
    <div>
      {/* this wil control how many random users get from randomusers api */}
      <span>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={getRandomUsers}>get</button>
      </span>
      <p>results: {results.length}</p>

      {/* 
          gender: string; // gender
  fullName: string; // name.title + name.first + name.last
  address: string; // location.street.number + location.street.name , location.city + location.state + location.country
  email: string; // email
  age: number; // dob.age
  contactInfo: ContactInfo;
  picture: string; // picture.medium
      */}

      <div className="random-users-container">
        {results.length !== 0 &&
          results.map((result: any, index: number) => {
            const { gender, name, location, dob, email, cell, picture } =
              result;

            return (
              <RandomUserCard
                key={`random-user-card-${index.toString()}-${
                  result.login.uuid
                }`}
                gender={gender}
                fullName={`${name.title} ${name.first} ${name.last}`}
                address={`${location.street.number} ${location.street.name} ${location.city} ${location.state}, ${location.country}`}
                age={dob.age}
                contactInfo={{
                  email,
                  cell,
                }}
                picture={picture.medium}
                // index={index}
                removeHandler={() => {
                  // setResults(
                  //   results.filter((result: any) => result.email !== email)
                  // );
                  const clone = [...results];
                  clone.splice(index, 1);
                  setResults(clone);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
