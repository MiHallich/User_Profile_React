import { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function request() {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user"
      );
      const json = await response.json();
      setData(json);
    }
    request();
  }, []);
  console.log(data);
  return (
    <div className={styles.user_info_holder}>
      <div className={styles.user_name_holder}>
        {data.first_name} {data.last_name}
      </div>
      <img
        className={styles.user_avatar_holder}
        src={data.avatar}
        alt="Loading..."
      ></img>
      <div className={styles.user_username_holder}>{data.username}</div>
      <div className={styles.user_email_holder}>{data.email}</div>
      <div className={styles.user_contacts_holder}>
        <div className={styles.user_contacts_title_holder}>Contacts</div>
        <div className={styles.user_phone_number_holder}>
          Phone number:{data.phone_number}
        </div>
      </div>
      <div className={styles.user_address_holder}>
        <div className={styles.user_address_title_holder}>Address</div>
        <div className={styles.user_city_holder}>
          City: {data.address?.city}
        </div>
        <div className={styles.user_country_holder}>
          Country: {data.address?.country}
        </div>
        <div className={styles.user_state_holder}>
          State: {data.address?.state}
        </div>
      </div>
    </div>
  );
}

export default App;
