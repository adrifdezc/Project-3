import React, {useState} from 'react'
import Button from '@restart/ui/esm/Button';
import { Form, FormControl } from 'react-bootstrap';


const Search = () => {
    const [text, setText] = useState('')

    return (
      <section className="Search">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search by Name"
            className="me-2"
            value={text}
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </section>
    );
}

export default Search
