
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


cd D:\PROJECTS\ML_Codechef\MiniTask1\Mini-Tasks-20\Shruti_Shreya
    


# In[3]:


pwd


# In[4]:


cd D:\PROJECTS\ML_Codechef\MiniTask1\Mini-Tasks-20\Shruti_Shreya


# In[5]:


ls


# In[6]:


test_file=pd.read_csv("test.csv")


# In[7]:


train_file=pd.read_csv("train.csv")


# In[8]:


test_file.info


# In[9]:


test_file.info()


# In[10]:


test_file


# In[11]:


test_file=test_file.drop(['Name','Ticket','Cabin'],axis=1)


# In[12]:


test_file


# In[13]:


test_file=test_file.dropna(axis=0)


# In[14]:


test_file


# In[15]:


test_file.Sex


# In[16]:


test_file.Sex=test_file.Sex.astype("category")


# In[18]:


test_file.Sex=test_file.Sex.cat.codes


# In[19]:


test_file


# In[20]:


test_file['Embarked']=test_file['Embarked'].astype('category')


# In[21]:


test_file['Embarked']=test_file['Embarked'].cat.codes


# In[22]:


test_file

