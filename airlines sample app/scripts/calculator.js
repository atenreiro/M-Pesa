/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function calcTaxes() {

alert(x);

  var x = document.getElementById('txtAmount').value;
  var x = document.frmTaxes.txtAmount.value;
  
  switch (true) {
    case (x < 100):
        Commission = 3;
        break;
    case (x > 101 && x < 500):
        Commission = 15;
        break;
    case (x > 501 && x < 1000):
        Commission = 15;
        break;
    case (x > 1001 && x < 2000):
        Commission = 20;
        break;	
    case (x > 2001 && x < 5000):
        Commission = 25;
        break;
    case (x > 5001 && x < 10000):
        Commission = 80;
        break;			
    case (x > 10001 && x < 25000):
        Commission = 100;
        break;			
    default:
        Commission = 0;
        break;
	}
  
  return alert(Commission);


}
