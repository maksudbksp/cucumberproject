package StepPack;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OurWebsiteData1Stepdefinition extends AbstractClass {
	@Given("^I am on OurWebsiteData(\\d+) page to test multiple account$")
	public void i_am_on_OurWebsiteData_page_to_test_multiple_account() throws Throwable {
	   driver.get("file:///C:/Users/maksu/Desktop/WebSite/OurWebSite.html");
	}

	@When("^I write <\"(.*?)\"> at firstname textbox, <\"(.*?)\"> at lastname textbox, <\"(.*?)\"> at email textbox, <\"(.*?)\"> at cemail textbox, <\"(.*?)\"> at password textbox$")
	public void i_write_at_firstname_textbox_at_lastname_textbox_at_email_textbox_at_cemail_textbox_at_password_textbox(String FN, String LN, String EM, String CEM, String PW) throws Throwable {
		driver.findElement(By.xpath(".//*[@id='FN']")).sendKeys(FN);
		driver.findElement(By.id("LN")).sendKeys(LN);
		driver.findElement(By.xpath("html/body/input[3]")).sendKeys(EM);
		driver.findElement(By.xpath("html/body/input[4]")).sendKeys(CEM);
		driver.findElement(By.xpath("html/body/input[5]")).sendKeys(PW);
	   
	}

	@When("^I select <\"(.*?)\"> at month dropdown box,<\"(.*?)\"> at day dropdown box,<\"(.*?)\"> at year dropdown box$")
	public void i_select_at_month_dropdown_box_at_day_dropdown_box_at_year_dropdown_box(String MN, String DY, String YR) throws Throwable {
		Select DOM=new Select(driver.findElement(By.xpath("html/body/select[1]")));
		DOM.selectByVisibleText(MN);
		Select DOB=new Select(driver.findElement(By.xpath("html/body/select[2]")));
		DOB.selectByVisibleText(DY);
		Select DOY=new Select(driver.findElement(By.xpath("html/body/select[3]")));
		DOY.selectByVisibleText(YR);


	}

	@When("^I click on <\"(.*?)\"> at sex radio button$")
	public void i_click_on_at_sex_radio_button(String Sex) throws Throwable {
		if(Sex.equalsIgnoreCase("Male")) {
			driver.findElement(By.xpath("html/body/input[6]")).click();
		}
		else if(Sex.equalsIgnoreCase("Female")) {
			driver.findElement(By.xpath("/html/body/input[7]")).click();
		}
		else {
			System.out.println("wrong object name");
		}
	   
	}

	@Then("^I could able to create multiple new account at OurWebsiteData(\\d+) successfully$")
	public void i_could_able_to_create_multiple_new_account_at_OurWebsiteData_successfully() throws Throwable {
		System.out.println(" we should abaled to create successfully multiple account at web page");
	    
	}



}
