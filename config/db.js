var mongoose   = require('mongoose');
//na mLab é possível criar um DB Mongo free, com uso de até 500MB http://mlab.com
mongoose.connect('CONEXÃO COM MONGO');

require('../model/index');