Feature: Test Suite For Hiremee Candidate Login
	
	Scenario Outline: Login Hiremee Candidate Login With Valid Credentials
	Given Open chrome and start Application
	When Enter Valid "<username>" and "<password>" 
	Then User Should be able to login successfully
	
	Examples:
	|username| |password|
	|otp2@mailnesia.com| |123456|
	
	Scenario Outline: Login Hiremee college Login With Valid Credentials
	Given Open chrome and start Application
	When Enter Valid "<username>" and "<password>" 
	Then User Should be able to login successfully
	
	Examples:
	|username| |password|
	|otp2@mailnesia.com| |123456|
