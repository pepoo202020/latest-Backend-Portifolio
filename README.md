# Backend Project For Portfolio

This project serves as a dynamic backend server interfacing with a MongoDB database to curate and manage personal skills, information, projects, and experiences. The primary aim is to seamlessly synchronize and present this data in a frontend website, providing an automatic and efficient update mechanism.

## API Reference

#### Main Page Route

```http
  GET http://localhost:2000/
```

### Skills

#### Get all skills

```http
  GET /api/skills/all
```

#### Create New Skill

```http
  POST /api/skills/new
```

| Parameter       | Type     | Description                                    |
| :-------------- | :------- | :--------------------------------------------- |
| `skillName`     | `string` | **Required**. skillName of skill to create     |
| `skillImage`    | `string` | **Required**. skillImage of skill to create    |
| `skillCategory` | `string` | **Required**. skillCategory of skill to create |

#### Get Skill

```http
  GET /api/skills/specific/:id
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. id of skill to get skill |

#### Get All Skills Without Programs

```http
  GET /api/skills/withoutP
```

#### Filter Skills With Skills Category

```http
  GET /api/skills/filter/:id
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `string` | **Required**. id of skill category to get skill |

#### Update Skill

```http
  PUT /api/skills/:id
```

| Parameter       | Type     | Description                                          |
| :-------------- | :------- | :--------------------------------------------------- |
| `id`            | `string` | **Required**. id of skill to Update skill            |
| `skillName`     | `string` | **Optional**. skillName of skill to Update skill     |
| `skillCategory` | `string` | **Optional**. skillCategory of skill to Update skill |

#### Delete Skill

```http
  DELETE /api/skills/:id
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Required**. id of skill to Delete skill |

### Skills Categories

#### Get all Categories

```http
  GET /api/cates/skills/all
```

#### Create New Skill Category

```http
  POST /api/cates/skills/new
```

| Parameter      | Type     | Description                                            |
| :------------- | :------- | :----------------------------------------------------- |
| `categoryName` | `string` | **Required**. categoryName of skill Category to create |

#### Get Skill Category

```http
  GET /api/cates/skills/specific/:id
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `string` | **Required**. id of skill to get skill Category |

#### Update Skill Category

```http
  PUT /api/cates/skills/:id
```

| Parameter      | Type     | Description                                                           |
| :------------- | :------- | :-------------------------------------------------------------------- |
| `id`           | `string` | **Required**. id of skill Category to Update skill Category           |
| `categoryName` | `string` | **Required**. categoryName of skill Category to Update skill Category |

#### Delete Skill Category

```http
  DELETE /api/cates/skills/:id
```

| Parameter | Type     | Description                                                 |
| :-------- | :------- | :---------------------------------------------------------- |
| `id`      | `string` | **Required**. id of skill Category to Delete skill Category |

### Projects Categories

#### Get all Categories

```http
  GET /api/cates/projects/all
```

#### Create New Project Category

```http
  POST /api/cates/projects/new
```

| Parameter      | Type     | Description                                              |
| :------------- | :------- | :------------------------------------------------------- |
| `categoryName` | `string` | **Required**. categoryName of Project Category to create |

#### Get Project Category

```http
  GET /api/cates/projects/specific/:id
```

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| `id`      | `string` | **Required**. id of Project Category to get Project Category |

#### Update Project Category

```http
  PUT /api/cates/projects/:id
```

| Parameter      | Type     | Description                                                               |
| :------------- | :------- | :------------------------------------------------------------------------ |
| `id`           | `string` | **Required**. id of Project Category to Update Project Category           |
| `categoryName` | `string` | **Required**. categoryName of Project Category to Update Project Category |

#### Delete Project Category

```http
  DELETE /api/cates/projects/:id
```

| Parameter | Type     | Description                                                     |
| :-------- | :------- | :-------------------------------------------------------------- |
| `id`      | `string` | **Required**. id of Project Category to Delete Project Category |

### Experiences

#### Get all Experiences

```http
  GET /api/experiences/all
```

#### Create New Experience

```http
  POST /api/experiences/new
```

| Parameter      | Type     | Description                                                                         |
| :------------- | :------- | :---------------------------------------------------------------------------------- |
| `title`        | `string` | **Required**. title of Experience title to create                                   |
| `company`      | `string` | **Required**. company of Experience company name to create                          |
| `companyLink`  | `string` | **Required**. companyLink of Experience link of company to create                   |
| `location`     | `string` | **Required**. location of Experience location of company to create                  |
| `startDate`    | `string` | **Required**. startDate of Experience start date that worked to create              |
| `stillPresent` | `string` | **Optional**. stillPresent of Experience still work in it to create                 |
| `endDate`      | `string` | **Optional**. endDate of Experience end date that gone to create                    |
| `description`  | `string` | **Optional**. description of Experience orders and description of my work to create |

#### Get An Experience

```http
  GET /api/experiences/:id
```

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `id`      | `string` | **Required**. id of Experience to get Experience |

#### Update An Experience

```http
  PUT /api/experiences/:id
```

| Parameter      | Type     | Description                                                                         |
| :------------- | :------- | :---------------------------------------------------------------------------------- |
| `id`           | `string` | **Required**. id of Experience to Update Experience                                 |
| `title`        | `string` | **Required**. title of Experience title to Update                                   |
| `company`      | `string` | **Required**. company of Experience company name to Update                          |
| `companyLink`  | `string` | **Required**. companyLink of Experience link of company to Update                   |
| `location`     | `string` | **Required**. location of Experience location of company to Update                  |
| `startDate`    | `string` | **Required**. startDate of Experience start date that worked to Update              |
| `stillPresent` | `string` | **Optional**. stillPresent of Experience still work in it to Update                 |
| `endDate`      | `string` | **Optional**. endDate of Experience end date that gone to Update                    |
| `description`  | `string` | **Optional**. description of Experience orders and description of my work to Update |

#### Delete An Experience

```http
  DELETE /api/experiences/:id
```

| Parameter | Type     | Description                                         |
| :-------- | :------- | :-------------------------------------------------- |
| `id`      | `string` | **Required**. id of Experience to Delete Experience |

### Projects

#### Get all Projects

```http
  GET /api/projects/all
```

#### Create New Project

```http
  POST /api/projects/new
```

| Parameter            | Type            | Description                                                   |
| :------------------- | :-------------- | :------------------------------------------------------------ |
| `title`              | `string`        | **Required**. title of Project title to create                |
| `subtitle`           | `string`        | **Required**. subtitle of Project subtitle to create          |
| `description`        | `string`        | **Required**. description of Project description to create    |
| `images`             | `array[string]` | **Required**. images of Project images to create              |
| `mainImage`          | `string`        | **Required**. mainImage of Project main image to create       |
| `link`               | `string`        | **Optional**. link of Project link to create                  |
| `skills_used`        | `array[string]` | **Optional**. skills_used Project skills used to create       |
| `programs`           | `array[string]` | **Optional**. programs Project programs to create             |
| `project_Categories` | `array[string]` | **Optional**. project_Categories Project Categories to create |

#### Get A Project

```http
  GET /api/projects/project/:id
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `id`      | `string` | **Required**. id of Project to get Project |

#### Update A Project

```http
  PUT /api/projects/:id
```

| Parameter            | Type            | Description                                                   |
| :------------------- | :-------------- | :------------------------------------------------------------ |
| `id`                 | `string`        | **Required**. id of Project to Update Project                 |
| `title`              | `string`        | **Required**. title of Project title to Update                |
| `subtitle`           | `string`        | **Required**. subtitle of Project subtitle to Update          |
| `description`        | `string`        | **Required**. description of Project description to Update    |
| `images`             | `array[string]` | **Required**. images of Project images to Update              |
| `mainImage`          | `string`        | **Required**. mainImage of Project main image to Update       |
| `link`               | `string`        | **Optional**. link of Project link to Update                  |
| `skills_used`        | `array[string]` | **Optional**. skills_used Project skills used to Update       |
| `programs`           | `array[string]` | **Optional**. programs Project programs to Update             |
| `project_Categories` | `array[string]` | **Optional**. project_Categories Project Categories to Update |

#### Filter Projects with Category

```http
  GET /api/projects/category/:category_name
```

| Parameter       | Type     | Description                                            |
| :-------------- | :------- | :----------------------------------------------------- |
| `category_name` | `string` | **Required**. category_name of Project to get Projects |

#### Filter Projects with skills

```http
  GET /api/projects/skills/:skills_used
```

| Parameter     | Type     | Description                                          |
| :------------ | :------- | :--------------------------------------------------- |
| `skills_used` | `string` | **Required**. skills_used of Project to get Projects |

#### Filter Projects with Programs

```http
  GET /api/projects/programs/:program
```

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| `program` | `string` | **Required**. program of Project to get Projects |

#### Filter Projects with Category, Skill and Programs

```http
  GET /api/projects/filter/:category_name/:skill_name/:program
```

| Parameter       | Type     | Description                                            |
| :-------------- | :------- | :----------------------------------------------------- |
| `category_name` | `string` | **Required**. category_name of Project to get Projects |
| `skill_name`    | `string` | **Required**. skill_name of Project to get Projects    |
| `program`       | `string` | **Required**. program of Project to get Projects       |

#### Delete A Project

```http
  DELETE /api/projects/:id
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `id`      | `string` | **Required**. id of Project to Delete Project |
