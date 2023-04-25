export function save_localStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(error);

  }
}


export function load_localStorage(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) {
      return value;
    }
    throw new Error("value could't exist");
    
  } catch (error) {
    throw new Error(error);
  }

}
export function delete_localStorage(key){
  try {
    localStorage.removeItem(key);
  } catch (error) {
    throw new Error(error);

  }
}

export function clear_localStorage(){
  try {
    localStorage.clear();
  } catch (error) {
    throw new Error(error);

  }
}

export const localStorage_keys = {
  temp_payment:"temp-payment",
  payment_RandomId:"payment_RandomId"
}