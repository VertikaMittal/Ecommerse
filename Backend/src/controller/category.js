const slugify=require('slugify');
const Category=require("../models/category")

function createCategories(categories, parentId=null){
    const categoryList=[];
    if(parentId==null){
        category=categories.filter(cat=>cat.parentId==undefined);
    }
    else{
        category=categories.filter(cat=>cat.parentId==parentId);
    }

    for(let cate of categories){
        categoryList.push({
            _id:cate._id,
            name:cate.name,
            slug:cate.slug,
            // children:createCategories(categories,cate._id)    here it is not working due to recursive call related error
        });
    }
   return categoryList; 
};
exports.addCategory=(req,res)=>{
    const categoryObj={
        name:req.body.name,
        slug:slugify(req.body.name)
    }
    if(req.body.parentId){
        categoryObj.parentId=req.body.parentId;
    }
    const cat=new Category(categoryObj);
    cat.save((err,category)=>{
        if(err) return res.status(400).json({err});
        if(category) return res.status(201).json({category});
    })
}

exports.getCategories=(req,res)=>{
    Category.find({})
    .exec((err,categories)=>{
        if(err) return res.status(400).json({err});
        if(categories){
            const categoryList= createCategories(categories)
            res.status(201).json({categoryList});
        }
    })
}