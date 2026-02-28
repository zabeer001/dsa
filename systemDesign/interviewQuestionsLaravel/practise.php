Get the maximum order amount for each user.


$customers = Customer::withMax("orders","amount")->get();


