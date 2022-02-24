import { useDropzone } from "react-dropzone";

import React, { useEffect, useState } from "react";
import { Typography, Fab, makeStyles, Box, Container } from "@material-ui/core";
import { Email, AddCircle, DraftsOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
import validator from "validator";

import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { InboxOutlined } from "@ant-design/icons";

const useStyles = makeStyles({
  root: {},

  fab: {
    margin: 15,
  },

  body: {
    backgroundColor: "#f5f8fa",
  },
});
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 

  // EMAIL VALIDATION
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [showValidation, setShowValidation] = useState(false);
  const validateEmail = (e) => {
    var email = e;
    if (validator.isEmail(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setShowValidation(true);
  };
  useEffect(() => {
    if (emailValue === "" || emailValue === null || emailValue === undefined) {
      setShowValidation(false);
    }
  }, [emailValue]);

  const [file, setFile] = useState();
  const outputchange = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
    },
  };

  const classes = useStyles();
  return (
    <body id="cc">
      
      <br />
      <br />
      <br />

      
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterButtom
            >
              Looking to <strong> verify an email</strong>
            </Typography>

            <br />
            <br />

            <Typography
              style={{ fontWeight: 600 }}
              variant="h7"
              align="center"
              color="textSecondary"
              paragraph
            >
              This email verification tool actually connects to the mail server
              and checks whether the mailbox exists or not.
            </Typography>
          </Container>

          <Container>
          <center>
            {" "}
            <div className="col-md-8 mx-auto">
              <TextField
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
                label="Email"
                className={`w-75 ${classes.root}`}
                color="secondary"
                id="standard-basic"
                variant="standard"
              />
              <Button
                style={{ marginTop: 12 }}
                variant="outlined"
                onClick={() => validateEmail(emailValue)}
              >
                verify
              </Button>
              <br />
              <br />
              <br />

              {emailValue !== "" &&
                emailValue !== null &&
                emailValue !== undefined &&
                showValidation && (
                  <div
                    id="result-email"
                    className={`${
                      isEmailValid
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }`}
                  >
                    {isEmailValid ? (
                      <span>Valid Email :)</span>
                    ) : (
                      <span>No valid Email!</span>
                    )}
                  </div>
                )}
                
                
              <label htmlFor="upload-txt">
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>
                    {" "}
                    <AddCircle /> Click to Upload
                  </Button>
                </Upload>
              </label>
             
            </div>
            </center>
          </Container>

          <br />
          <br />
          <br />
          <center>
            <Typography variant="h5"> What is being verified:</Typography>
            <br />
            <Box sx={{ display: "inline" }}>
              <DraftsOutlined style={{ fontSize: "80px" }} />
              <Box component="span" sx={{ display: "block" }}>
                Format
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                "name@domain.xxx"{" "}
              </Box>
            </Box>
          </center>
        </div>
      </main>

      <br />
      <br />
      <br />
      <br />
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Something</h1>

          <h2>Contact</h2>
          <ul class="nav__ul">
            <li>
              <a href="#">xxxxxxxx@gmail.com</a>
            </li>
          </ul>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
          <p>&copy; 2019 Something. All rights reserved.</p>

          <div class="legal__links">
            <span>
              Made by <span class="heart">♥</span> Abdellah and ussef from
              Anywhere
            </span>
          </div>
        </div>
      </footer>
    </body>
  );
};
export default ResponsiveAppBar;
