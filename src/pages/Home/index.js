import React, { useState, useEffect, useCallback } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { BiCalendar, BiTimeFive, BiTestTube, BiCheck, BiCaretRight, BiTrendingUp, BiTrendingDown } from "react-icons/bi";

import ResultsTable from '../../components/ResultsTable';
import Graphic from '../../components/Graphic';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import LogOut from '../../components/LogOut';

import { Container, Block, InputGroup, Separator } from './styles';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };

  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default function Home() {
  const currentDate = new Date();

  const [testValue, setTestValue] = useState('');
  const [testHours, setTestHours] = useState(currentDate.getHours().toString().padStart(2, '0'));
  const [testMinutes, setTestMinutes] = useState(currentDate.getMinutes().toString().padStart(2, '0'));
  const [testDay, setTestDay] = useState(currentDate.getDate().toString().padStart(2, '0'));
  const [testMonth, setTestMonth] = useState((currentDate.getMonth() + 1).toString().padStart(2, '0'));
  const [testYear, setTestYear] = useState(currentDate.getFullYear().toString().substr(-2).padStart(2, '0'));
  const [results, setResults] = useState([]);
  const [resultsValues, setResultsValues] = useState({
    results: [],
    dates: [],
  });
  const [focusDate, setFocusDate] = useState(false);
  const [focusTime, setFocusTime] = useState(false);
  const [focusValue, setFocusValue] = useState(false);
  const [loading, setLoading] = useState(true);

  const getReadings = useCallback(() => {
    setLoading(true);

    db.collection('readings').orderBy('date', 'desc').limit(20).get().then((response) => {
      const readingsResults = [];
      const readingsResultsValues = [];
      let currentDate = '';

      response.forEach((doc) => {
        const readingDate = doc.data().date.toDate();
        const readingValue = doc.data().value;
        let readingVariation = '';

        if (readingValue < 60 || readingValue > 170) {
          readingVariation = <span>{(readingValue < 60) ? <BiTrendingDown /> : <BiTrendingUp />}</span>;
        } else if ((readingValue >= 60 && readingValue < 80) || (readingValue > 150 && readingValue <= 170)) {
          readingVariation = <span>{(readingValue >= 60 && readingValue < 80) ? <BiTrendingDown /> : <BiTrendingUp />}</span>;
        } else {
          readingVariation = <span><BiCaretRight color="transparent" /></span>;
        }

        readingsResults.push([readingDate.toLocaleDateString('pt-BR') !== currentDate ? readingDate.toLocaleDateString('pt-BR') : '', readingDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', }), <>{readingValue}&nbsp;{readingVariation}</>]);
        readingsResultsValues.push(readingValue);

        if (readingDate.toLocaleDateString('pt-BR') !== currentDate) {
          currentDate = readingDate.toLocaleDateString('pt-BR');
        }
      });

      const firstLastDates = [response.docs[0].data().date.toDate().toLocaleDateString('pt-BR'), response.docs[response.docs.length - 1].data().date.toDate().toLocaleDateString('pt-BR')];

      setResults(readingsResults);
      setResultsValues({
        results: readingsResultsValues,
        dates: firstLastDates,
      });
      setLoading(false);
    });
  }, []);

  function submitReading() {
    const year = Number(`20${testYear}`);
    const month = Number(testMonth) - 1;
    const day = Number(testDay);
    const hours = Number(testHours);
    const minutes = Number(testMinutes);

    const readingDateMS = new Date(year, month, day, hours, minutes).getTime();

    const firebaseDate = firebase.firestore.Timestamp.fromMillis(readingDateMS);

    const readingObj = {
      date: firebaseDate,
      value: Number(testValue),
    };

    db.collection('readings').add(readingObj).then((response) => {
      getReadings();
    });
  }

  useEffect(() => {
    getReadings();
  }, [getReadings]);

  return (
    <Container>
      <Block>
        <InputGroup focus={focusDate}>
          <BiCalendar />
          <Input
            type="text"
            inputMode="numeric"
            value={testDay}
            onChange={(ev) => {
              if (Number(ev.target.value) < 1) {
                ev.target.value = '01';
              }

              if (Number(ev.target.value) > 31) {
                ev.target.value = '31';
              }

              setTestDay(ev.target.value.replaceAll(/\D/g, ''));
            }}
            onFocus={() => {
              setFocusDate(true);
            }}
            onBlur={(ev) => {
              ev.target.value = ev.target.value.padStart(2, '0');
              setFocusDate(false);
            }}
          />/
          <Input
            type="text"
            inputMode="numeric"
            value={testMonth}
            onChange={(ev) => {
              if (Number(ev.target.value) < 1) {
                ev.target.value = '01';
              }

              if (Number(ev.target.value) > 12) {
                ev.target.value = '12';
              }

              setTestMonth(ev.target.value.replaceAll(/\D/g, ''));
            }}
            onFocus={() => {
              setFocusDate(true);
            }}
            onBlur={(ev) => {
              ev.target.value = ev.target.value.padStart(2, '0');
              setFocusDate(false);
            }}
          />/
          <Input
            type="text"
            inputMode="numeric"
            value={testYear}
            onChange={(ev) => {
              if (Number(ev.target.value) < 0) {
                ev.target.value = '00';
              }

              if (Number(ev.target.value) > 99) {
                ev.target.value = '99';
              }

              setTestYear(ev.target.value.replaceAll(/\D/g, ''));
            }}
            onFocus={() => {
              setFocusDate(true);
            }}
            onBlur={(ev) => {
              ev.target.value = ev.target.value.padStart(2, '0');
              setFocusDate(false);
            }}
          />
        </InputGroup>
      </Block>
      <Block>
        <InputGroup focus={focusTime}>
          <BiTimeFive />
          <Input
            type="text"
            inputMode="numeric"
            value={testHours}
            onChange={(ev) => {
              if (Number(ev.target.value) < 0) {
                ev.target.value = '00';
              }

              if (Number(ev.target.value) > 23) {
                ev.target.value = '23';
              }

              setTestHours(ev.target.value.replaceAll(/\D/g, ''));
            }}
            onFocus={() => {
              setFocusTime(true);
            }}
            onBlur={(ev) => {
              ev.target.value = ev.target.value.padStart(2, '0');
              setFocusTime(false);
            }}
          />:
          <Input
            type="text"
            inputMode="numeric"
            value={testMinutes}
            onChange={(ev) => {
              if (Number(ev.target.value) < 0) {
                ev.target.value = '00';
              }

              if (Number(ev.target.value) > 59) {
                ev.target.value = '59';
              }

              setTestMinutes(ev.target.value.replaceAll(/\D/g, ''));
            }}
            onFocus={() => {
              setFocusTime(true);
            }}
            onBlur={(ev) => {
              ev.target.value = ev.target.value.padStart(2, '0');
              setFocusTime(false);
            }}
          />
        </InputGroup>
      </Block>
      <Block>
        <InputGroup focus={focusValue}>
          <BiTestTube />
          <Input
            type="text"
            inputMode="numeric"
            value={testValue}
            onChange={(ev) => {
              setTestValue(ev.target.value.replaceAll(/\D/g, ''));
            }}
            onFocus={() => {
              setFocusValue(true);
            }}
            onBlur={() => {
              setFocusValue(false);
            }}
          />
        </InputGroup>
        <Button text={<><BiCheck />&nbsp;Save</>} onClick={submitReading} />
      </Block>
      <Separator />
      {loading ? (
        <Loading />
      ) : (
        <>
          <ResultsTable headers={[<><BiCalendar />&nbsp;Date</>, <><BiTimeFive />&nbsp;Time</>, <><BiTestTube />&nbsp;Value</>]} values={results} />
          <Block>
            <Graphic points={resultsValues.results} dates={resultsValues.dates} />
          </Block>
        </>
      )}
      <Block>
        <LogOut />
      </Block>
    </Container>
  );
}