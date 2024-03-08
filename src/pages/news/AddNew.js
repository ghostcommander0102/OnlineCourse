import { Card, Form, Row, Col, Button} from 'react-bootstrap';

import Layout from '../../layout/default';
import Block from '../../components/Block/Block';
import Quill, { QuillMinimal } from '../../components/Form/editors/Quill';
import FileUpload from '../../components/Form/FileUpload';

function QuillPage() {
  return (
    <Layout title="Quill" content="container">
        <Block.Head page className="wide-md">
            <Block.HeadContent>
                <Block.Title>Add News</Block.Title>
            </Block.HeadContent>
        </Block.Head>
        <Card>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">News Title (English)</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Enter News Title"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">Short Description (English)</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Enter Short Description"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">Content (English)</Form.Label>
                            <Quill />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">Search For Slug (English)</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Enter Sly"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">News Title (Swedish)</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Enter News Title"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">Short Description (Swedish)</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Enter Short Description"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">Content (Swedish)</Form.Label>
                            <Quill />
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col md="12">
                        <Form.Group className="form-group">
                            <Form.Label htmlFor="exampleFormControlInputText1">Search For Slug (Swedish)</Form.Label>
                            <div className="form-control-wrap">
                                <Form.Control type="text" id="exampleFormControlInputText1" placeholder="Enter Sly"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <Row className="g-3 gx-gs">
                    <Col sm="12">
                        <Form.Group className="form-group">
                            <Form.Label>Picture</Form.Label>
                            <div className="form-control-wrap">
                                <FileUpload iconName="files"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Body>
                <ul className="d-flex gap g-3 flex-wrap" style={{textAlign: 'center'}}>
                    <li><Button variant="success">Save</Button></li>
                    <li><Button variant="info">Cancel</Button></li>
                </ul>
            </Card.Body>
        </Card>

    </Layout>
  )
}

export default QuillPage;