package StepPack;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"pretty", "html:Report/TestRepeort"},
		features="src/Features",
		glue="StepPack",
		tags= {"@OurWebSite, @Facebook, "
				+ "@Fundtransfer"},
		
		monochrome=true
		)

public class TestRunner extends AbstractTestNGCucumberTests{

}
