/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//Permite poder capturar las peticiones y poderlas ejenviar sin necesidad de utilizar le fetch del navegador
global.fetch = require('jest-fetch-mock');
