package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
		features="features",
		glue= {"StepDefenition"},
		
		format = {"pretty", "html:target/Destination"}
		)						
public class TestRunner 				
{		
	

}