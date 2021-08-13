import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  btn: {
    fontSize: 12,
    backgroundColor: "rgba(255, 250, 133,0.2)",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
  field:{
    margin: 10,
    width: '90%'
}
});
function CreateReview() {
    const history = useHistory();
  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState(false);
  const [body, setBody] = useState("");
  const [bodyErr, setBodyErr] = useState(false);
  const [feeling, setFeeling] = useState("Good");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false);
    setBodyErr(false);
    if (title === "") {
      setTitleErr(true);
    }
    if (body === "") {
      setBodyErr(true);
    }
    
    if (title && body) {
     axios.post(' http://localhost:8000/reviews',{title, body, feeling }    )

     history.push('/')
     setTitle("");
     setBody("");
    }
  };

  return (
    <Container>
      <Typography variant="h4" color="secondary" gutterBottom={true}>
        Addð new post
      </Typography>

      <form noValidate onSubmit={handleSubmit} autoComplete="off"  >
        <TextField
            className={classes.field}
          label="Title"
          color="secondary"
          fullWidth
          required
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={titleErr}
        />

        <TextField
            className={classes.field}
          label="body"
          color="info"
          fullWidth
          required
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          error={bodyErr}
        />
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={feeling}
          onChange={(e) => setFeeling(e.target.value)}
        >
          <FormControlLabel label="Good" control={<Radio/>} value="good" />
          <FormControlLabel label="Bad" control={<Radio/>} value="bad" />
          <FormControlLabel label="Ugly" control={<Radio/>} value="ugly" />
     
        </RadioGroup>
        <Button
          type="submit"
          className={classes.btn}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default CreateReview;
