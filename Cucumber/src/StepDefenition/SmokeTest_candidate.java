package StepDefenition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SmokeTest_candidate {

	WebDriver driver;
	
	@Given("^Open chrome and start Application$")
	public void Open_chrome_and_start_Application()throws Throwable 
	{
		System.setProperty("webdriver.chrome.driver", "./Driver/chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://172.18.1.87:81/candidate/login");
		
	}

	@When("^Enter Valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void Enter_Valid_and(String user_name, String passs) throws Throwable 
	{
		driver.findElement(By.id("js-candi-email_address")).sendKeys(user_name);
		driver.findElement(By.id("js-candi-password")).sendKeys(passs);
		

	}

	@Then("^User Should be able to login successfully$")
	public void User_Should_be_able_to_login_successfully() throws Throwable 
	{
		driver.findElement(By.id("js-btn_submit")).click();

	}
	
	
	
	
}