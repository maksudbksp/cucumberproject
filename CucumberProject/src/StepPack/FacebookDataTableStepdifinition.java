package StepPack;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FacebookDataTableStepdifinition extends AbstractClass {
	@Given("^I am on facebook signup page for new account$")
	public void i_am_on_facebook_signup_page_for_new_account() throws Throwable {
	    driver.get("https://www.facebook.com/");
	}

	@When("^I Enter$")
	public void i_Enter(DataTable table1) throws Throwable {
		List<List<String>>data1=table1.raw();
		driver.findElement(By.name("firstname")).sendKeys(data1.get(0).get(1));
		driver.findElement(By.name("lastname")).sendKeys(data1.get(1).get(1));
		driver.findElement(By.name("reg_email__")).sendKeys(data1.get(2).get(1));
		driver.findElement(By.name("reg_email_confirmation__")).sendKeys(data1.get(3).get(1));
		driver.findElement(By.name("reg_passwd__")).sendKeys(data1.get(4).get(1));
		
		
	    
	}

	@When("^I Select from dropdownbox$")
	public void i_Select_from_dropdownbox(DataTable table2) throws Throwable {
		List<List<String>>data2=table2.raw();
		Select monthSelect=new Select(driver.findElement(By.id("month")));
		monthSelect.selectByVisibleText(data2.get(0).get(1));
		Select daySelect=new Select(driver.findElement(By.name("birthday_day")));
		daySelect.selectByVisibleText(data2.get(1).get(1));
		Select yearSelect=new Select(driver.findElement(By.xpath(".//*[@id='year']")));
		yearSelect.selectByVisibleText(data2.get(2).get(1));
		Thread.sleep(3000);
	    
	}

	@When("^I Click on Male Radio button$")
	public void i_Click_on_Male_Radio_button() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='u_0_a']")).click();
	}

	@When("^I Click on SignUp button$")
	public void i_Click_on_SignUp_button() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='u_0_u']")).click();
	    	}

	@Then("^I should able to create one new facebook account$")
	public void i_should_able_to_create_one_new_facebook_account() throws Throwable {
		System.out.println("facebook signup successfully");
	}



}
