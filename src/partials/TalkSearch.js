'use strict';

import Soy from 'metal-soy';
import { ElectricSearch } from 'electric-base-components';

import templates from './TalkSearch.soy';

class TalkSearch extends ElectricSearch {}

Soy.register(TalkSearch, templates);

export default TalkSearch;