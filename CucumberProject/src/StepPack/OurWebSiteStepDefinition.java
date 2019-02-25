package StepPack;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OurWebSiteStepDefinition extends AbstractClass{
	
	@Given("^I am on OurWebsite Signup page$")
	public void i_am_on_OurWebsite_Signup_page() throws Throwable {
	    driver.get("file:///C:/Users/maksu/Desktop/WebSite/OurWebSite.html");
	}

	@When("^I Enter \"(.*?)\" in FirstName Textbox, \"(.*?)\" in LastName textbox, \"(.*?)\" in email textbox,  \"(.*?)\" in confirm email textbox, \"(.*?)\" in password textbox$")
	public void i_Enter_in_FirstName_Textbox_in_LastName_textbox_in_email_textbox_in_confirm_email_textbox_in_password_textbox(String FN, String LN, String EM, String CEM, String PW) throws Throwable {
		driver.findElement(By.xpath(".//*[@id='FN']")).sendKeys(FN);
		driver.findElement(By.id("LN")).sendKeys(LN);
		driver.findElement(By.xpath("html/body/input[3]")).sendKeys(EM);
		driver.findElement(By.xpath("html/body/input[4]")).sendKeys(CEM);
		driver.findElement(By.xpath("html/body/input[5]")).sendKeys(PW);
	    
	}

	@When("^I Select \"(.*?)\" from Month Dropdown box, \"(.*?)\" from day dropdown box, \"(.*?)\" from year dropdown box$")
	public void i_Select_from_Month_Dropdown_box_from_day_dropdown_box_from_year_dropdown_box(String MN, String DY, String YR) throws Throwable {
		Select DOM=new Select(driver.findElement(By.xpath("html/body/select[1]")));
		DOM.selectByVisibleText(MN);
		Select DOB=new Select(driver.findElement(By.xpath("html/body/select[2]")));
		DOB.selectByVisibleText(DY);
		Select DOY=new Select(driver.findElement(By.xpath("html/body/select[3]")));
		DOY.selectByVisibleText(YR);
	   
	}

	@When("^I Click on \"(.*?)\" Radio button$")
	public void i_Click_on_Radio_button(String arg1) throws Throwable {
		driver.findElement(By.xpath("html/body/input[6]")).click();
	   
	}

	@Then("^I should able to create a new Account$")
	public void i_should_able_to_create_a_new_Account() throws Throwable {
		System.out.println("Our website signup successfully");
	    
	}

}
