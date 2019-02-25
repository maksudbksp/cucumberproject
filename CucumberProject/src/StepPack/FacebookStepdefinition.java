package StepPack;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FacebookStepdefinition extends AbstractClass{
	
	
	
	@Given("^I am on facebook signup page$")
	public void i_am_on_facebook_signup_page() throws Throwable {
		
		driver.get("https://www.facebook.com/");
	    
	}

	@When("^I enter \"(.*?)\" in firstname textbox, \"(.*?)\" in lastname textbox, \"(.*?)\" in email textbox,  \"(.*?)\" in confirm email textbox, \"(.*?)\" in password textbox$")
	public void i_enter_in_firstname_textbox_in_lastname_textbox_in_email_textbox_in_confirm_email_textbox_in_password_textbox(String FN, String LN, String EM, String AEM, String PW) throws Throwable {
		driver.findElement(By.name("firstname")).sendKeys(FN);
		driver.findElement(By.name("lastname")).sendKeys(LN);
		driver.findElement(By.name("reg_email__")).sendKeys(EM);
		driver.findElement(By.name("reg_email_confirmation__")).sendKeys(AEM);
		driver.findElement(By.id("u_0_o")).sendKeys(PW);
	
		
		
	   
	}

	@When("^I select \"(.*?)\" from Month dropdown box, \"(.*?)\" from day dropdown box, \"(.*?)\" from year dropdown box$")
	public void i_select_from_Month_dropdown_box_from_day_dropdown_box_from_year_dropdown_box(String MN, String DY, String YR) throws Throwable {
		Select monthSelect=new Select(driver.findElement(By.id("month")));
		monthSelect.selectByVisibleText(MN);
		Select daySelect=new Select(driver.findElement(By.name("birthday_day")));
		daySelect.selectByVisibleText(DY);
		Select yearSelect=new Select(driver.findElement(By.xpath(".//*[@id='year']")));
		yearSelect.selectByVisibleText(YR);
		Thread.sleep(3000);
	}

	@When("^i click on \"(.*?)\" radio button$")
	public void i_click_on_radio_button(String Sex) throws Throwable {
		if(Sex.equalsIgnoreCase("Male")) {
		driver.findElement(By.xpath(".//*[@id='u_0_a']")).click();
		}
		else if(Sex.equalsIgnoreCase("Female")) {
			driver.findElement(By.xpath(".//*[@id='u_0_6']")).click();
			
		}
		else {
			System.out.println("Wrong object name");
		}
	}

	@When("^I click on Signup button$")
	public void i_click_on_Signup_button() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='u_0_u']")).click();
	}

	@Then("^I should able to create  new facebook account$")
	public void i_should_able_to_create_new_facebook_account() throws Throwable {
		System.out.println("facebook signup successfully");
	    
	}
	


}
