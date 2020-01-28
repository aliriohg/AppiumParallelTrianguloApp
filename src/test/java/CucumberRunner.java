import com.utils.ThreadLocalDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.cucumber.java.After;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;

@CucumberOptions(
        features = {"classpath:features"},
        glue = {"com.trianguloApp"},
        tags = {""},
        plugin = {"html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
public class CucumberRunner extends AbstractTestNGCucumberTests {
        @BeforeTest
        public void before(){
                System.out.println("before");
        }

        @BeforeMethod
        @Parameters({"deviceName", "platformName","automationName","appiumUrl"})
        public void setup (String deviceName, String platformVersion, String automationName,String appiumUrl) throws IOException, URISyntaxException {
                System.out.println("TestNG Before");

                DesiredCapabilities capabilities = new DesiredCapabilities();
                capabilities.setCapability("platformName", platformVersion);
//        capabilities.setCapability("deviceName", "ca65d73d");
                capabilities.setCapability("deviceName", deviceName);
                capabilities.setCapability("automationName", automationName);
                capabilities.setCapability(MobileCapabilityType.UDID, deviceName);
                capabilities.setCapability("app", getResource("Apps/Copy_of_TrianguloApp.apk").toString());
                URL server = new URL(appiumUrl);
                ThreadLocalDriver.setTLDriver(new AndroidDriver(server, capabilities));
        }

        @AfterMethod
        public void afterScenario(){
                System.out.println("TestNG After");
                ThreadLocalDriver.getTLDriver().quit();
        }
        public Path getResource(String fileName) throws URISyntaxException {
                URL refImgUrl = getClass().getClassLoader().getResource(fileName);

                return Paths.get(refImgUrl.toURI()).toFile().toPath();
        }


//        public DesiredCapabilities getCap(){
//
//        }


}