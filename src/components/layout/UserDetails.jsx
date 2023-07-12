import "../../styles/task3.css";

const UserDetails = (props) => {
  return (
    <section class="articles">
      <article>
        <div class="article-wrapper">
          <figure>
            <img src={props.data.avatar} alt="" />
          </figure>
          <div class="article-body">
            <h2>{props.data.employment.title}</h2>
            <ul>
              <li>Name: {props.data.first_name}</li>
              <li>id: {props.data.id}</li>
              <li>gender: {props.data.gender}</li>
              <li>Email: {props.data.email}</li>
              <li>Phone:{props.data.phone_number}</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default UserDetails;
