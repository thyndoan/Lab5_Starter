# Lab 5 - Starter

## Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

- Name: Thy Doan

---

- **Q1**: Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user
- **A**: No, because to send a message, we need multiple parts to work together as a group such as database, network and UI. We would need an integration testing instead of a unit test.

---

- **Q2**: Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- **A**: Yes, because we can check the "max message length" using a function that checks if the text length is less than or equal to 80. Because this is an isolated function, we can use a unit test for it.
