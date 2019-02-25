package StepPack;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FundTransferStepDefinition  extends AbstractClass{
	@Given("^I am on fund transfer web page$")
	public void i_am_on_fund_transfer_web_page() throws Throwable {
		driver.get("file:///D:/ITTraning/WebSite/JavaScript/FundTransfer.html");
	    
	}

	@When("^I select valid payee \"(.*?)\"$")
	public void i_select_valid_payee(String validpayee) throws Throwable {
		Select nameSelect=new Select(driver.findElement(By.id("payee")));
		nameSelect.selectByVisibleText(validpayee);
	    
	}

	@When("^I enter valid amount \"(.*?)\"$")
	public void i_enter_valid_amount(String validamount) throws Throwable {
		driver.findElement(By.name("amount")).sendKeys(validamount);
	    
	}
	@When("^I enter invalid amount \"(.*?)\"$")
	public void i_enter_invalid_amount(String invalidamount) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"amount\"]")).sendKeys(invalidamount);
	    
	}
	@When("^I select invalid payee \"(.*?)\"$")
	public void i_select_invalid_payee(String invalidPayee) throws Throwable {
		Select nameSelect=new Select(driver.findElement(By.xpath("//*[@id=\"payee\"]")));
		nameSelect.selectByVisibleText(invalidPayee);
	
	    
	}


	@When("^I click on transfer button$")
	public void i_click_on_transfer_button() throws Throwable {
		driver.findElement(By.id("transfer")).click();
	    
	}

	@Then("^I should get success message \"(.*?)\"$")
	public void i_should_get_success_message(String SM) throws Throwable {
		
		String ActualM=driver.findElement(By.xpath("//*[@id=\"message\"]")).getText();
		Assert.assertEquals(ActualM, SM);
		
	    
	}


	@Then("^I should get fail message \"(.*?)\"$")
	public void i_should_get_fail_message(String FM) throws Throwable {
		String ActualF=driver.findElement(By.xpath("//*[@id=\"message\"]")).getText();
		Assert.assertEquals(ActualF, FM);
		
		
	   
	}

	


}
