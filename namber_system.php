<?php
$ApiDID = $_GET['ApiDID'];    //הצבת משתנה שמקבל את מספר המערכת מהשרת של ימות   
if ($ApiDID != NULL)    //תנאי שבודק האם התקבל מספר מערכת
{               //באם מספר המערכת מופיע נותן פקודה להדפיס את המספר
    print "id_list_message=t-";
    print "מספר המערכת שאליה אתם מחוברים כעת, היא, ";
    print $ApiDID;
}
else{               //באם לא התקבל מספר מערכת מחזיר תשובה אחרת
    print "לא נמצא מידע על המערכת הרלוונטית";
}
?>